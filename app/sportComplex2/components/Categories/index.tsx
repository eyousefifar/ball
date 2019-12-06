import React from 'react';
import { View } from 'react-native';
import { TitleBar } from '../../../ball-library';
import { observer } from 'mobx-react';

// local
import CategoryCard from './CategoryCard';

// styles
import styleGenerator from './styles';
const Categories = props => {
  const styles = styleGenerator();
  return (
    <>
      <View style={styles.container}>
        <CategoryCard index={0} />
        <CategoryCard index={1} />
        <CategoryCard index={2} />
      </View>
    </>
  );
};

export default observer(Categories);
