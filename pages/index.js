import React from 'react';
import 'antd/dist/antd.css';
import { List, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import axios from 'axios';
import Navigation from '@/components/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

import Link from 'next/link';

// for (let i = 0; i < 23; i++) {
//   listData.push({
//     href: 'https://ant.design',
//     title: `ant design part ${i}`,
//     avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//     description:
//       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     content:
//       'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
//   });
// }

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require('firebase/app');

// Add the Firebase products that you want to use
require('firebase/auth');
require('firebase/firestore');

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function mapReducer(state, newState) {
  return newState;
}

export default function Home() {
  const [listData, setListData] = React.useState([]);
  const [itemPerPage, setItemPerPage] = React.useState(10);

  const [island, selectIsland] = React.useReducer(mapReducer, null);

  React.useEffect(() => {
    axios
      .get(
        'https://api.apify.com/v2/acts/petr_cermak~zillow-api-scraper/runs/last/dataset/items?token=93P4WX9SLPyyLoghYYNrEq4bk'
      )
      .then(function (response) {
        setListData(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navigation island={island} selectIsland={selectIsland} />
      <div style={{ paddingBottom: '20px' }}>
        {island && (
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page, pageSize) => {
                setItemPerPage(pageSize);
              },
              pageSize: itemPerPage,
            }}
            dataSource={listData}
            renderItem={(item) => (
              <List.Item
                key={item.address.streetAddress}
                actions={[
                  <IconText
                    icon={StarOutlined}
                    text="156"
                    key="list-vertical-star-o"
                  />,
                  <IconText
                    icon={LikeOutlined}
                    text="156"
                    key="list-vertical-like-o"
                  />,
                  <IconText
                    icon={MessageOutlined}
                    text="2"
                    key="list-vertical-message"
                  />,
                ]}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src={item.photos[item.photos.length - 1]}
                  />
                }
              >
                <List.Item.Meta
                  title={
                    <a href={'https://ant.design'}>
                      {item.address.streetAddress}
                    </a>
                  }
                  description={item.city}
                />
                {item.description}
              </List.Item>
            )}
          />
        )}
      </div>
    </>
  );
}
