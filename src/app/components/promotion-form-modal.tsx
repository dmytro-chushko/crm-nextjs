'use client';

import Modal, { ModalProps } from './Modal';
import PromotionForm from './promotion-form';

interface IPromotionFormModalProps extends ModalProps {
  companyId: string;
}

const PromotionFormModal = ({
  companyId,
  onClose,
  ...rest
}: IPromotionFormModalProps) => {
  return (
    <Modal {...rest} onClose={onClose}>
      <PromotionForm companyId={companyId} onSubmit={() => onClose()} />
    </Modal>
  );
};

export default PromotionFormModal;
