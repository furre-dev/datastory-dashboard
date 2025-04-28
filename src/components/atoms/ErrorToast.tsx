import { Alert } from "antd";

export default function ErrorToast() {
  return (
    <div className="absolute z-50 left-2/4 top-10 -translate-x-2/4">
      <Alert
        message="Oops! An error occured :("
        showIcon
        description="An unexpected error occured, please contact our support team or try again later!"
        type="error"
        closable
      />
    </div>)
}