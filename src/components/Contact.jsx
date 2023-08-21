import {useState, useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';




const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {}
  const handleSubmit = (e) => {}
 
  return (

    <div className="xl:mt-12 xl:fkex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left', "tween", 0.2,1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
    >
    <h3 className={styles.sectionHeadText}> contact us </h3>
    <form
    ref={formRef}
    onSubmit={handleSubmit}
    className="mt-12 flex flex-col gap-8"
    >
      <label className="flex flex-col">
      <span className="text-white font-medium mb-4">name</span>
      <input type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="your name"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
      />
      </label>

      <label className="flex flex-col">
      <span className="text-white font-medium mb-4">email</span>
      <input type="text"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="enter your email"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
      />
      </label>

      <label className="flex flex-col">
      <span className="text-white font-medium mb-4">message</span>
      <textarea
      rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="write the message here"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
      />
      </label>
      <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
        {loading ? 'sending...': 'send'}
      
      </button>
      
      
    </form>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
