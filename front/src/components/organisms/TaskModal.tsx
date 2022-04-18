import { memo, VFC } from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react';
import { Task } from '../../types/task';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  task: Task | null;
  onClickDelete: (id: number) => void;
};

export const TaskModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, task, onClickDelete } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>{task?.content}</ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={4} onClick={onClose}>
            edit
          </Button>
          <Button colorScheme="red" onClick={() => onClickDelete(task!.id)}>
            delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
