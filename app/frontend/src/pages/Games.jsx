import React, { useEffect, useState } from 'react';
import AddNewMatchBtn from '../components/AddNewMatchBtn';
import GamerFilter from '../components/GameFilter';
import GamesTable from '../components/GamesTable';
import Header from '../components/Header';
import LeaderboardBtn from '../components/LeaderboardBtn';
import LoginBtn from '../components/LoginBtn';
import '../styles/pages/games.css';

// iniciando o projeto hehe

const Games = () => {
  const [currentFilter, setCurrentFilter] = useState('Status do Jogo');
  const [isAdm, setIsAdm] = useState(false);
  const [logged, setLogin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token') || false;
    const role = localStorage.getItem('role') || false;
    if (token) setLogin(true);
    
    setIsAdm(role === 'admin');
  }, []);

  return (
    <>
      <Header
        page="PARTIDAS"
        FirstNavigationLink={ LeaderboardBtn }
        SecondNavegationLink={ LoginBtn }
        logged={ logged }
        setLogin={ setLogin }
      />
      <section className="games-section">
        <div className="games-handlers">
          <GamerFilter
            currentFilter={ currentFilter }
            setCurrentFilter={ setCurrentFilter }
          />
          {
            (isAdm)
              ? <AddNewMatchBtn />
              : null
          }
        </div>
        <GamesTable currentFilter={ currentFilter } isAdm={ isAdm } />
      </section>
    </>
  );
};

export default Games;
