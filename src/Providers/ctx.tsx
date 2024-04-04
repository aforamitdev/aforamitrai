import React, { createContext, useContext } from 'react';

const createCtx = <ContextType extends unknown>(): [
  () => ContextType,
  React.Provider<ContextType | undefined>
] => {
  const ctx = createContext<ContextType | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider];
};

export default createCtx;
