import {Image, FlatList} from 'react-native';
import React from 'react';

import {IPost} from '../../Types/models';
import FeedGridItem from './FeedGridItem';

interface IFeedGridView {
  data: IPost[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const FeedGridView = ({data, ListHeaderComponent}: IFeedGridView) => {
  return (
    <FlatList
      style={{marginHorizontal: -1}}
      data={data}
      renderItem={({item}) => <FeedGridItem post={item} />}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default FeedGridView;
