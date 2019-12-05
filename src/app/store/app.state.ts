export default class AppState {
  IsLoading: boolean;
}

export const initializeState = () => {
  return { IsLoading: false };
};
