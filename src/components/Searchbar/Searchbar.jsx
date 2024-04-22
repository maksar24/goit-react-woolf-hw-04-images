import { Button, Form, Input, Label, SearchBar } from './Searchbar.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(e.target.search.value);
    e.target.reset();
  };

  return (
    <SearchBar>
      <Form onSubmit={handleSubmit}>
        <Button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
          <Label>Search</Label>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          name="search"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </SearchBar>
  );
};

export default Searchbar;
