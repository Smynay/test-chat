import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import { AppServiceNames, AppServices } from "../services";
import { useContext, useEffect } from "react";
import { ServiceContext } from "../contexts";
import { receive } from "../store/features/chat";
import { ChatEventTypes, Message } from "../store/features/chat/types";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppServices = () => useContext(ServiceContext) as AppServices;
export const useAppService = (serviceName: AppServiceNames) =>
  useAppServices()[serviceName];

export const useSocketConnection = () =>
  useAppService(AppServiceNames.SOCKET_SERVICE).connection;
export const useSocketSubscriptions = () => {
  const dispatch = useAppDispatch();

  const socket = useSocketConnection();

  useEffect(() => {
    socket.on(ChatEventTypes.RECEIVE_MESSAGE, (payload: Message) => {
      dispatch(receive(payload));
    });
  }, []);
};
