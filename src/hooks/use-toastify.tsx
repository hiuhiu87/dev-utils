import { toast } from "react-toastify";

export const useToastify = () => {
  const showToast = ({
    title,
    message,
    type,
  }: {
    title?: string;
    message: string;
    type: "success" | "error" | "info" | "warning";
  }) => {
    toast(
      <div>
        {title && <strong>{title}</strong>}
        <p>{message}</p>
      </div>,
      {
        type,
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      },
    );
  };

  return { showToast };
};
