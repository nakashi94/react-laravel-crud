import { ChangeEvent, memo, useCallback, useState, VFC } from 'react';
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import { Task } from '../../types/task';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  task: Task | null;
  onClickDelete: (id: number) => void;
  onClickUpdate: (id: number, value: string) => void;
};

export const TaskModal: VFC<Props> = memo((props) => {
  const { isOpen, onClose, task, onClickDelete, onClickUpdate } = props;
  const [value, setValue] = useState<string>('');
  const [editFlag, setEditFlag] = useState<boolean>(false);

  const onClickEdit = useCallback(() => {
    setEditFlag((prevState) => !prevState);
  }, [editFlag]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return (
    <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          {editFlag ? (
            <Input placeholder="content" width="auto" value={value} onChange={onChange} />
          ) : (
            <Text>{task?.content}</Text>
          )}
        </ModalBody>
        <ModalFooter>
          {editFlag ? (
            <>
              <Button colorScheme="blue" mr={4} onClick={() => onClickUpdate(task!.id, value)}>
                update
              </Button>
              <Button colorScheme="red" onClick={onClickEdit}>
                cancel edit
              </Button>
            </>
          ) : (
            <>
              <Button colorScheme="blue" mr={4} onClick={onClickEdit}>
                edit
              </Button>
              <Button colorScheme="red" onClick={() => onClickDelete(task!.id)}>
                delete
              </Button>
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});
