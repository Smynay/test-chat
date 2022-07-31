import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { useContext, useEffect } from "react";
import { ServiceContext } from "../providers/contexts";
import { AppServiceNames, AppServices } from "../../../services";
import {
  ChatEventTypes,
  ChatUser,
  Message,
} from "../../../store/features/chat/types";
import {
  chatUserConnected,
  chatUserDisconnected,
  receive,
} from "../../../store/features/chat";
import { SocketCoreEventTypes } from "../../../services/socket";

export * from "./useRefWithScrollToBottom";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppServices = () => useContext(ServiceContext) as AppServices;
export const useAppService = <T extends keyof AppServices>(
  serviceName: T
): AppServices[T] => useAppServices()[serviceName];

export const useSocketConnection = () =>
  useAppService(AppServiceNames.SOCKET_SERVICE).connection;
export const useSocketSubscriptions = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state) => state.user.userData);

  const socket = useSocketConnection();

  useEffect(() => {
    if (userData) {
      socket.emit(SocketCoreEventTypes.CONNECTED_DATA, userData);
    }

    socket.on(SocketCoreEventTypes.CONNECTED, () => {
      socket.emit(SocketCoreEventTypes.CONNECTED_DATA, userData);
    });

    socket.on(ChatEventTypes.CONNECTED, (payload: ChatUser) => {
      dispatch(chatUserConnected(payload));
    });
    socket.on(ChatEventTypes.RECEIVE_MESSAGE, (payload: Message) => {
      dispatch(receive(payload));
    });
    socket.on(ChatEventTypes.DISCONNECTED, (payload: ChatUser) => {
      dispatch(chatUserDisconnected(payload));
    });

    return () => {
      socket.off(SocketCoreEventTypes.CONNECTED);
      socket.off(ChatEventTypes.CONNECTED);
      socket.off(ChatEventTypes.RECEIVE_MESSAGE);
      socket.off(ChatEventTypes.DISCONNECTED);
    };
  }, [dispatch, socket, userData]);
};
