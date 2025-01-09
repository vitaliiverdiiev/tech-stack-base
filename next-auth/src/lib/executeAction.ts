import { isRedirectError } from "next/dist/client/components/redirect-error";

type Options<T> = {
  actionFn: () => Promise<T>;
  successMessage?: string;
};

export const executeAction = async <T>({
  actionFn,
  successMessage,
}: Options<T>): Promise<{ success: boolean; message: string }> => {
  try {
    await actionFn();

    return {
      success: true,
      message: successMessage as string,
    };
  } catch (error) {
    if (isRedirectError(error)) throw Error;

    return {
      success: false,
      message: "An error has occured during executing the action",
    };
  }
};
