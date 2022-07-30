import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const Detail = () => {
    const param = useParams()
    const nav = useNavigate()
    const user = useSelector((state) => state.list)
    // const detailId = useSelector((state) => state)
    console.log('user:',user, 'Param:', param)
    return (
        <>
        {user.map((value) => {
            if(value.id == param.id){
                return (
                    <div key ={value.id}>
                        <h1>{value.title}</h1>
                        <h3>{value.content}</h3>
                        <button onClick = {() => {
                            nav(-1)
                        }}>이전</button>
                    </div>
                )
        }
        })}

        </>

    );
};

export default Detail;