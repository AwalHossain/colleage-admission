import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

export default function ForgetPassModal() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Reset Password</DialogTitle>
        <DialogDescription>
          Please enter your email address below. We'll send you a link to reset
          your password.
        </DialogDescription>
      </DialogHeader>
      <form className="mt-4 flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500">
          Send Reset Link
        </button>
      </form>
    </DialogContent>
  );
}
