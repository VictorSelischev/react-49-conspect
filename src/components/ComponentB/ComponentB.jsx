import { useToggle } from "../../hooks/useToggle";
import { Modul } from "../Modul/Modul";

export const ComponentB = () => {
    // const [isModalOpen, setIsModealOpen] = useState(false);
    // const openModal = () => setIsModealOpen(true);
    // const closeModal = () => setIsModealOpen(false);

    const { isOpen, open, close } = useToggle();

    return (
        <>
            <button onClick={open}>Open Modal</button>
            <Modul onClose={close} isOpen={isOpen} />
        </>
    );
}