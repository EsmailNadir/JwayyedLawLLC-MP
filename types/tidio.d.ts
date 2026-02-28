interface TidioChatApi {
  on: (event: string, callback: () => void) => void;
  open: () => void;
  close: () => void;
  hide: () => void;
  show: () => void;
  display: (show: boolean) => void;
}

interface Window {
  tidioChatApi: TidioChatApi;
}
