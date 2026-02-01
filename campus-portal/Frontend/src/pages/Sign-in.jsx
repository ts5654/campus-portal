import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Sign = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const API = "http://localhost:5000/api/auth";

  const handle = async (e) => {
    e.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      if (isLogin) {
        const res = await axios.post(`${API}/signin`, {
          email,
          password,
        });

   const userData = { email, token: res.data.token };
  localStorage.setItem("user", JSON.stringify(userData));
        alert(res.data.message || "Login Successful!");
        navigate("/");
      } else {
        await axios.post(`${API}/signup`, {
          email,
          password,
          
        });

        alert("Account created successfully! Please login.");
        setIsLogin(true);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      alert(error?.response?.data?.message || "Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen p-4 overflow-hidden font-sans bg-black">
      <motion.div className="absolute w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob top-1/4 left-1/4" />
      <motion.div className="absolute w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 bottom-1/4 right-1/4" />

      <motion.div
        key={isLogin ? "login" : "signup"}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md p-8 text-white border border-gray-700 sm:p-10 bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-3xl"
      >
        <h1 className="mb-8 text-4xl font-extrabold text-center text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>

        <form onSubmit={handle} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm">Email Address</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 text-gray-100 border border-gray-700 bg-gray-900/50 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm">Password</label>
            <input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 text-gray-100 border border-gray-700 bg-gray-900/50 rounded-xl focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <AnimatePresence>
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label className="block mb-2 text-sm">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  required={!isLogin}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-5 py-3 text-gray-100 border border-gray-700 bg-gray-900/50 rounded-xl focus:ring-2 focus:ring-blue-500"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={!loading && { scale: 1.02 }}
            whileTap={!loading && { scale: 0.98 }}
            className={`w-full py-3 text-lg font-bold rounded-xl shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:from-blue-700 hover:to-purple-700"
            }`}
          >
            {loading ? "Please wait..." : isLogin ? "Sign In" : "Sign Up"}
          </motion.button>
        </form>

        <div className="mt-6 text-sm text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-300 hover:underline"
          >
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Sign In"}
          </button>
        </div>
      </motion.div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
};
