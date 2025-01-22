'use client'

import React, {useReducer, useRef} from "react"
import {useFirestore} from '@/context/FirestoreContext'
import { initialTaskState, taskReducer } from '../reducers/taskReducer'
import { MdAddTask, MdOutlineCancel } from 'react-icons/md'
import { FaDigitalTachograph } from "react-icons/fa"

const AddTaskModal = () => {
    const {addDocument } = useFirestore();
    const [ state, dispatch ] = useReducer(taskReducer, initialTaskState);
    const modalRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDocument("myTasks", {
                task: state.task,
            });
            dispatch({ type: "RESET_FORM"});
            modalRef.current.close();
        } catch (error) {
            console.error('Error saving ne task: ${error');
        }
}

return (
    <dialog
    ref={modalRef}
    id="add_new_task"
    className="modal modal-bottom sm:modal-middle"
    >
        <div className="modal-box">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center justify-center gap-3"
            >
                <input 
                    type="text"
                    value={state.task}
                    onChange={(e) =>
                        dispatch({
                            type: "UPDATE_TASK",
                            payload: e.target.value,
                        })
                    }
                />
                <div className="modal-action">
                    <button type="submit" className="btn btn-primary">
                        <MdAddTask /> Add Task
                    </button>
                    <button type="button" className="btn" onClick={() => modalRef.current.close()}>
                        <MdOutlineCancel /> Cancel
                    </button>
                </div>
            </form>
        </div>
    </dialog>
    );
};

export default AddTaskModal;