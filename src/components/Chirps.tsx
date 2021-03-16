import * as React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Chirps: React.FC<IChirpsProps> = (props) => {
  const [chirp, setChirp] = useState<IChirp[]>([]);

  const getChirps = async () => {
    let r = await fetch("/api/chirps/");
    let chirps = await r.json();
    setChirp(chirps);
  };

  useEffect(() => {
    getChirps();
  }, []);


  return (
    <React.Fragment>
      <section className="row my-2">
        <ul className="col-md-6 offset-md-3 list-group">
          {chirp.map(chirp => (
            <li
              key={`${chirp.id}user-info`}
              className="list-group-item d-flex justify-content-between"
            >
              <h5>{chirp.user}</h5>
              <p>{chirp.text}</p>
              <p>{chirp.id}</p>

              <Link to={`/${chirp.id}/info`} className="btn btn-primary">
                Admin Options
              </Link>
            </li>
          ))}
        </ul>  
      </section>

    </React.Fragment>
  );
};

export interface IChirp {
  id: number;
  user: string;
  text: string;
}

export interface IChirpsProps {}

export default Chirps;
