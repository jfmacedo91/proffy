import './styles.css';
import React from 'react';
import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
  id: number,
  name: string,
  avatar: string,
  bio: string,
  subject: string,
  cost: number,
  whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={ teacher.avatar } alt={ teacher.name } />
        <div>
          <strong>{ teacher.name }</strong>
          <span>{ teacher.subject }</span>
        </div>
      </header>
      
      <p>{ teacher.bio }</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ { teacher.cost }</strong>
        </p>

        <a onClick={ createNewConnection } href={ `https://wa.me/${ teacher.whatsapp }` }>
          <img src={ WhatsappIcon } alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;