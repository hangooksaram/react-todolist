import React, { useState } from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline, MdArrowForward, MdClear }
    from 'react-icons/md'
import cn from 'classnames'
import TodoListDetail from './TodoListDetail'
import Modal from 'react-modal'
import './scss/TodoListItem.scss'

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked, date } = todo;
    const [clicked, setClicked] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const onDetail = () => {
        //setClicked(true)
        return (
            <Modal contentLabel={<TodoListDetail item={todo} />} />
        )
    }
    const modalStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width : 370,
        }
    };
    return (
        <div>
            <div className="TodoListItem">
                <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <div className="text">{text}</div>
                    <div>{date}</div>
                </div>
                <div className="remove" onClick={() => onRemove(id)} >
                    <MdRemoveCircleOutline />
                </div>
                <div className="detail" onClick={() => { openModal() }}>더 보기<MdArrowForward /></div>
                <Modal style={modalStyles} onRequestClose={closeModal} isOpen={modalOpen}>
                    <div style = {{display : 'flex'}}><div style = {{marginLeft : 'auto'}}  onClick={closeModal}><MdClear/></div></div>
                    <text style = {{textAlign : 'center'}}><TodoListDetail item={todo} /></text>
                </Modal>
            </div>
            {clicked ? <TodoListDetail item={todo} /> : ""}
        </div>
    )
}

export default TodoListItem;