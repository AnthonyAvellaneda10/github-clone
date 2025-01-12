import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleLoginWithGithub } from "../lib/function";

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] flex flex-col items-center pt-16 px-4 animate__animated animate__fadeIn">
      {/* GitHub Logo */}
      <div className="mb-4">
        <Link to="/">
          <svg
            height="48"
            viewBox="0 0 16 16"
            width="48"
            className="text-white fill-current"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </Link>
      </div>

      {/* Main Container */}
      <div className="w-full max-w-[340px] text-center">
        <h1 className="text-2xl font-light mb-8 text-white">
          Sign up to GitHub
        </h1>

        {/* Login Form */}
        <div className="bg-[#151b23] rounded-md p-4 mb-4 border border-[#30363d]">
          <button
            type="button"
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 
						focus:outline-none focus:ring-[#24292F]/50 
              font-medium rounded-lg flex gap-2 p-2 items-center w-full text-center justify-center transition duration-300"
            onClick={handleLoginWithGithub}
          >
            <FaGithub className="w-5 h-5" />
            Sign up with Github
          </button>
        </div>

        {/* Secondary Box */}
        <div className="bg-[#0d1117] rounded-md p-4 border border-[#30363d] text-sm">
          <div className="flex items-center justify-center space-x-1">
            <span className="text-[#f0f6fc]">Already have an account?</span>
            <Link to="/login" className="text-[#2f81f7] hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-[#7d8590]">
        <a
          href="https://docs.github.com/es/site-policy/github-terms/github-terms-of-service"
          target="_blank"
          className="hover:text-[#2f81f7] hover:underline"
        >
          Terms
        </a>
        <a
          href="https://docs.github.com/es/site-policy/privacy-policies/github-general-privacy-statement"
          target="_blank"
          className="hover:text-[#2f81f7] hover:underline"
        >
          Privacy
        </a>
        <a
          href="https://docs.github.com/es"
          target="_blank"
          className="hover:text-[#2f81f7] hover:underline"
        >
          Docs
        </a>
        <a
          href="https://support.github.com"
          className="hover:text-[#2f81f7] hover:underline"
        >
          Contact GitHub Support
        </a>
        <a className="hover:text-[#2f81f7] hover:underline cursor-default">
          Manage cookies
        </a>
        <a className="hover:text-[#2f81f7] hover:underline cursor-default">
          Do not share my personal information
        </a>
      </div>
    </div>
  );
};

export default SignUpPage;
