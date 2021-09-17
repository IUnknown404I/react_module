import React from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <p><span style={{fontSize: '16px', marginRight: '15px'}}>Сортировка: </span>
                <MySelect
                    defaultValue='Сортировка по ...'
                    options={[
                        {value: 'title', name: 'По названию'},
                        {value: 'body', name: 'По описанию'},
                    ]}
                    value={filter.sort}
                    onChange={selected => setFilter({...filter, sort: selected})}
                />
            </p>

            <p>
                <span style={{fontSize: '16px', marginRight: '15px'}}>Поиск: </span>
                <MyInput
                    style={{margin: '15px 37px', width: '50%'}}
                    value={filter.query}
                    onChange={e => setFilter({...filter, query: e.target.value})}
                    placeholder='Поиск по заголовку...'
                />
            </p>
        </div>
    );
};

export default PostFilter;