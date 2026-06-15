const useDynamicState = <data>(
  userObject: data
) => {
  const dataUser = userObject as data;

  return dataUser;
}


export default useDynamicState;
