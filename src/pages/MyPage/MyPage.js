import React, { useState } from 'react';
import "./MyPage.css";
import icon_down from '../../assets/images/icon_down.png';
import icon_up from '../../assets/images/icon_up.png';
import list_check from '../../assets/images/list_check.png';

function MyPage() {
  const [isListViewOpen, setIsListViewOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleBoxClick = () => {
    setIsListViewOpen(!isListViewOpen);
};

const handleItemClick = (item) => {
    setSelectedItem(item);
};

  return (
    <div className="myPage">
      <div className="my-column">
        <div className="my-row">
          <div className="my-name">고집불통</div>
          <div className="my-name-unit">님</div>
        </div>
        <div className="my-hi">안녕하세요~</div>
        <div className="my-line1"/>

        <div className="my-email">이메일</div>
        <div className="my-email-detail">gojip123@naver.com</div>

        <div className="my-collection">컬렉션 추가/수정</div>
        <div className='my-list'>
                    <Box
                        onClick={handleBoxClick}
                        selectedItem={selectedItem}
                        isListViewOpen={isListViewOpen}
                    />
                    {isListViewOpen && (
                        <ListView
                            items={items}
    selectedItem={selectedItem}
    onItemClick={handleItemClick}
                        />
                    )}
                </div>


        <div className="my-line2"/>

        <div className="my-logout">로그아웃</div>
        <div className="my-withdrawal">탈퇴</div>
      </div>
    </div>
  );
}

const Box = ({ onClick, selectedItem, isListViewOpen }) => {
  return (
      <div
          onClick={onClick}
          style={{
              border: '1px solid #C8C8C8',
              paddingLeft: '10px',
              paddingRight: '10px',
              paddingTop:'5px',
              cursor: 'pointer',
              width: '310.51px',
              height: '30.92px',
              display: 'flex', 
              justifyContent: 'space-between'
          }}
      >
          {selectedItem}
          <img 
              className='icon-down' 
              alt='icon_down' 
              src={isListViewOpen ? icon_up : icon_down} 
              style={{
                  width: '20.37px',
                  height: '19.74px',
              }}
          />
      </div>
  );
};

const ListView = ({ items, onItemClick, selectedItem }) => {
  return (
      <div>
          {items.map((item) => (
              <div
                  key={item}
                  onClick={() => onItemClick(item)}
                  style={{
                      paddingLeft: '10px',
                      paddingRight: '10px',
                      paddingTop:'5px',
                      cursor: 'pointer',
                      width: '310.51px',
                      height: '30.92px',
                      backgroundColor: '#F4F4F4',
                      display: 'flex', 
                      justifyContent: 'space-between'
                  }}
              >
                  {item}
                  {item === selectedItem && <img alt='list_check' src={list_check} style={{
                      width: '13.2px',
                      height: '13.39px',
                  }}/>}
              </div>
          ))}
      </div>

  );
};


const items = ['item1', 'item2', 'item3'];

export default MyPage;
