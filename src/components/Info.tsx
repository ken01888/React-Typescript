import * as React from "react";
import { RouteComponentProps } from "react-router";
import {useState,useEffect} from 'react'
import {IChirp} from './Chirps'
import { idText } from "typescript";
import chirpstore from "../server/chirpstore";


export interface InfoProps extends RouteComponentProps<{id:string}> {}

const Info: React.FC<InfoProps> = ({history,match: {params:{id}}}) => {


  const [chirp, setChirp] = useState<IChirp>({
      id:null,
      user:null,
      text:null

  });

  const getInfo = async () => {
    let r = await fetch(`/api/chirps/${id}`);
    let chirp = await r.json();
    setChirp(chirp);
  };


  useEffect(() => {
    getInfo();
  }, [id]);


  return (
    <React.Fragment>
      <div className="card">
  <div className="card-header">
    <h3>{chirp.user}</h3>
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>{chirp.text}.</p>
        <button onClick={()=>history.goBack()} className="btn btn-primary">Back</button>
    </blockquote>
  </div>
</div>



    </React.Fragment>
  );
};



export default Info;