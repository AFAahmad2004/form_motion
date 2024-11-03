import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="bg-bac relative h-screen flex justify-center items-center">
      <motion.section
        initial={{ x: 0, y: 0 }}
        animate={{ x: 100, y: 100 }}
        transition={{ duration: 2 }}
        className="w-[320px] h-[320px] bg-slate-400 rounded-[40px]
       absolute top-0 left-40 rotate-45 "
      ></motion.section>
      <motion.section
        initial={{ x: 0, y: 0 }}
        animate={{ x: -100, y: -100 }}
        transition={{ duration: 2 }}
        className="w-[320px] h-[320px] bg-slate-400 rounded-[40px]
       absolute bottom-0 right-40 rotate-45 "
      ></motion.section>
      <motion.form
        initial={{ scale: 0.5 }}
        animate={{ scale: 0.9 }}
        transition={{ duration: 2 }}
        action=""
        className="w-[455px] h-[455px] bg-[#F6FBF9] z-40 
      rounded-[32px] flex flex-col text-center items-center"
      >
        <header>
          <h1 className="m-6">Form</h1>
          <p className="mb-3 z-30">
            Lorem ipsum dolor sit amet co perferendis ut ratione repudiandae?
            Provident, quo!
          </p>
        </header>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="w-[375px] h-[55px] 
          border-[1px] rounded-[10px] pl-[15px] mb-[12px]"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="w-[375px] h-[55px]
            border-[1px] rounded-[10px] pl-[15px]"
          />
        </div>
        <button
          type="submit"
          className="bg-bt w-[255px] h-[59px] rounded-[15px] mt-[15px]
        mb-3"
        >
          Login
        </button>
        <div>
          <p>
            Lorem ipsum dolor? <a href="#">signin</a>
          </p>
        </div>
      </motion.form>
    </div>
  );
}
