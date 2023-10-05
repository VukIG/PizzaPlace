import AddProduct from './AddProduct';
import { createPortal } from 'react-dom';
import EditModal from './EditModal';
import { motion, AnimatePresence } from 'framer-motion';

function AddModal({ active, edit, onChange, data }) {
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
  };

  return (
    <div>
      {(active || edit) &&
        createPortal(
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
            <div className="absolute w-full h-full bg-slate-700 opacity-40" />
            <AnimatePresence>
              <motion.div
                className="modal"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                key="modal"
              >
                {active ? <AddProduct onClose={onChange} /> : <EditModal onClose={onChange} data={data} />}
              </motion.div>
            </AnimatePresence>
          </div>,
          document.body
        )}
    </div>
  );
}

export default AddModal;
