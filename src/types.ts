import store  from 'app/store';

export interface ISimplifiable {
  simplified?: boolean
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch