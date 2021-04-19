import { useEffect, useState } from 'react';
import { Button } from './Button';

import '../styles/sidebar.scss';


 interface SiderBarProps{
  onGenres:{
    id: number,
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family',
    title: string,
  }[];
  onNewGenres: (id:number)=>void;
  onSelectedGenreId: number;
 }

export function SideBar({onGenres,onNewGenres,onSelectedGenreId}:SiderBarProps) {
  

  return (
    <nav className="sidebar">
      <span>Lili<p>Movies</p></span>

      <div className="buttons-container">
        {onGenres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onNewGenres(genre.id)}
            selected={onSelectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
  // Complete aqui
}