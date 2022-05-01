import React, {useEffect, useState} from 'react';
import ReactPaginate, {ReactPaginateProps} from "react-paginate";
import {RepositoryType} from "../../redux/user-reducer";
import style from './RepositoriesList.module.css';
import arrow from '../../assets/previous.svg';
import disabledarrow from '../../assets/disabledarrow.svg';

type ItemsProps = {
    currentItems: RepositoryType[]
}

const Items = ({currentItems}: ItemsProps) => {
    return (
        <div>
            {currentItems &&
                currentItems.map((item) => (
                    <div className={style.items}>
                        <a href={item.html_url} target="_blank" rel="noreferrer">{item.name}</a>
                        <div className={style.description}>{item.description ? item.description : ''}</div>
                    </div>
                ))}
        </div>
    );
}

type RepositoriesListType = {
    repos: RepositoryType[]
}

export function RepositoriesList({repos}: RepositoriesListType) {

    const [currentItems, setCurrentItems] = useState<RepositoryType[] | null>(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(repos.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(repos.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, repos]);

    const handlePageClick = (e:  { selected: number }) => {
        const newOffset = (e.selected * itemsPerPage) % repos.length;
        setItemOffset(newOffset);
    };

    return (
        <div className={style.container}>
            <div className={style.itemsContainer}>
                <div className={style.title}>Repositories ({repos.length})</div>
                {(currentItems !== null) && <Items currentItems={currentItems}/>}
            </div>
            <div className={style.paginationContainer}>
                <div>{repos.length > 4 ? <>{itemOffset+1}-{itemOffset+itemsPerPage} of {repos.length} items</>
                :<> {itemOffset+1} of {repos.length} items </>} </div>
                <ReactPaginate
                    breakLabel="..."
                    marginPagesDisplayed={1}
                    nextLabel={<ButtonArrow transform={{transform : 'rotate(180deg)'}}/>}
                    disabledClassName={style.disabled}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    pageCount={pageCount}
                    pageClassName={style.page}
                    previousLabel={<ButtonArrow/>}
                    renderOnZeroPageCount={(props: ReactPaginateProps) => null}
                    containerClassName={style.pagination}
                    activeClassName={style.active}
                />
            </div>
        </div>
    );
}

type ButtonArrowType = {
    transform?: {
        transform: string
    }
}

const ButtonArrow = ({transform}: ButtonArrowType) => {
    return (
        <>
            <div className={style.arrow}>
                <img src={arrow} alt="next" style={transform}/>
            </div>
            <div className={style.disabledArrow}>
                <img src={disabledarrow} alt="next" style={transform}/>
            </div>
        </>

    )
};


