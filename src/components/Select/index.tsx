import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ContentOptions, Icon, Input, Option } from './styles';
import arrow from '../../assets/images/icons/downArrow.svg';
import { TInputOptions } from '../../utils/capitals';

interface ISelectInput {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  options: TInputOptions;
}

export default function SelectInput({
  search,
  setSearch,
  options,
}: ISelectInput) {
  const [openedOptions, setOpenedOptions] = useState(false);
  const navigate = useNavigate();

  const handleOpenOptions = () => {
    setOpenedOptions((prevState) => !prevState);
  };

  const handleChangePage = (event: React.MouseEvent<HTMLLIElement>) => {
    navigate(`${event.currentTarget.dataset.value}`);
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(event.target.value);

  return (
    <>
      <Container
        onFocus={handleOpenOptions}
        onBlur={handleOpenOptions}
        isFocused={openedOptions}
        tabIndex={0}
      >
        <Input
          value={search}
          placeholder="Selecione a sua cidade"
          onChange={handleInputChange}
        />
        <Icon src={arrow} alt="Down arrow" />
      </Container>
      {openedOptions && (
        <ContentOptions isFocused={openedOptions}>
          {options.length >= 1 ? (
            options.map(({ value, text }) => (
              <Option
                onMouseDown={handleMouseDown}
                onClick={handleChangePage}
                key={value}
                data-value={value}
              >
                {text}
              </Option>
            ))
          ) : (
            <Option>Nenhuma idade encontrada</Option>
          )}
        </ContentOptions>
      )}
    </>
  );
}
