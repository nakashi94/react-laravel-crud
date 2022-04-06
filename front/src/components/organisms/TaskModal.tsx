import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    isOpen: boolean;
    onClose: () => void;
}

export const TaskModal: VFC<Props> = memo((props) => {
    const { isOpen, onClose } = props;

    let navigate = useNavigate();

    const onClickNavigate = (): void => navigate("/id");

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {/* {`${task.content}`} */}
                    aaa
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='teal' mr={4} onClick={onClickNavigate}>
                        DetailShow
                    </Button>
                    <Button colorScheme='blue' onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
})
