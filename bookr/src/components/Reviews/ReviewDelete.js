import React from 'react';
import '../Description/Description.css';


export default function ReviewDelete (props)  {

     function deleteIt(){
        props.deleteThis(props.review.id);
        
        setTimeout(function(){window.location.reload();
     },1000);}

    console.log(props.review.id);
        return (
        <div className="comment">
            <p>{props.review.username}: {props.review.review} {props.review.rating}<button onClick={deleteIt} >Delete</button></p>

        </div>
    )

}