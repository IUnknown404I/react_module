import React from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter, limit, setLimit}) => {
    return (
        <div>
            <p><span style={{fontSize: '16px', marginRight: '15px'}}>Сортировка: </span>
                <MySelect
                    defaultValue='Сортировать по ...'
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

            <p>
                <span style={{fontSize: '16px', marginRight: '0'}}>Вывод постов: </span>
                <MySelect
                    value={limit}
                    onChange={(value) => {setLimit(value)}}
                    defaultValue='Кол-во элементов'
                    options={[
                        {value: '5', name: 'По 5'},
                        {value: '10', name: 'По 10'},
                        {value: '20', name: 'По 20'},
                        {value: '-1', name: 'Показать всё'},
                    ]}
                />
            </p>
        </div>
    );
};

export default PostFilter;