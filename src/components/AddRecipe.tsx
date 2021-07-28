import { useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { useActions } from '../hooks/useActions';
// import { useTypedSelector } from '../hooks/useTypedSelector';
import { IngredientType, InstructionType } from '../models/Recipe';

const TextInput = styled.div``;

const AddRecipe = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [time, setTime] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [ingredients, setIngredients] = useState<IngredientType[]>([]);
  const [instructions, setInstructions] = useState<InstructionType[]>([]);

  const { register, handleSubmit } = useForm();

  const { addRecipe } = useActions();

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newRecipe = {
      title,
      category,
      time,
      difficulty: parseInt(difficulty),
      image: '',
      ingredients: [],
      instructions: [],
    };

    addRecipe(newRecipe);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <label htmlFor="category">category</label>
      <input
        type="text"
        name="category"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <label htmlFor="time">time</label>
      <input
        type="text"
        name="time"
        value={time}
        onChange={e => setTime(e.target.value)}
      />
      <label htmlFor="difficulty">difficulty</label>
      <input
        type="number"
        name="difficulty"
        value={difficulty}
        onChange={e => setDifficulty(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddRecipe;
