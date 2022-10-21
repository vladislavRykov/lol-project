import React from 'react';
import s from './DialogPerson.module.scss';
import { IDialogPerson } from '../../../models/IDialogPerson';
import DialogTextArea from '../dialogTextArea/DialogTextArea';
import cl from 'classnames';

const DialogPerson = ({ person, name, text, left, isView, isNextView, isLast }: IDialogPerson) => {
  return (
    <div
      className={cl({
        [s.item]: true,
        [s.opacity1]: isView && !isNextView,
      })}
    >
      <img className={cl({ [s.item_left]: left, [s.item_right]: !left })} src={person} alt="" />
      <DialogTextArea who={name} text={text} />
    </div>
  );
};

export default DialogPerson;
