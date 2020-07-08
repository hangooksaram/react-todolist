import React, { useCallback, useState, useRef } from 'react'
import './scss/TodoInsert.scss'
import { MdAdd } from 'react-icons/md'
const TodoInsert = ({ onInsert, item }) => {
    const [value, setValue] = useState('');
    const [detail, setDetail] = useState('');
    
    const onChange = useCallback(e => {
        setValue(e.target.value)
    }, []);
    const onChangeDetail = useCallback(e => {
        setDetail(e.target.value)
    }, [])
    let isItem = Object.getOwnPropertyNames(item)
    const onSubmit = useCallback(e => {
        onInsert(value, detail);
        setValue('');
        setDetail('');
        e.preventDefault();
    }, [onInsert, value, detail])

    return (
        <div>
            <form className="TodoInsert" onSubmit={onSubmit}>
                <input className = "input" value={value} onChange={onChange} placeholder={isItem.length === 2 ? "할 일이 없습니다." : "할 일을 입력하세요"} />
                <input className = "inputtwo" value={detail} onChange={onChangeDetail} placeholder={isItem.length === 2 ? "할 일을 입력해주세요." : "상세 내용을 적어주세요"} />
                <button type="submit">
                    <MdAdd />
                
                </button>
            </form>
        </div>
    )
}

export default TodoInsert;