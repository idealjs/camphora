import serverContext, {
  getServerContext,
  setServerContext,
} from "@/components/utils/serverContext";

const groupNameContext = serverContext<string | null>(null);

export const getGroupName = () => {
  const value = getServerContext(groupNameContext);
  if (value == null) {
    throw new Error("context not initialized");
  }
  return value;
};

export const setGroupName = (value: string) => {
  setServerContext(groupNameContext, value);
};

const defaultValueContext = serverContext<string | null>(null);

export const getDefaultValue = () => {
  const value = getServerContext(defaultValueContext);
  return value;
};

export const setDefaultValue = (value: string) => {
  setServerContext(defaultValueContext, value);
};
