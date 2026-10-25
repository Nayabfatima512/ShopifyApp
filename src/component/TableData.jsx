import React, { useState } from 'react'
import { Table, Whisper, Tooltip } from 'rsuite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { tableData } from '../utility/data'
import progressIcon from '../assets/progressIcon.svg'
import generateVIcon from '../assets/videoGenerateIcon.svg'
import eyeIcon from '../assets/EyeIcon.svg'
import leftAngle from '../assets/leftAngle.svg'
import rightAngle from '../assets/rightAngle.svg'
import Badge from './Badge'

const { Column, HeaderCell, Cell } = Table

const statusStyle = {
    Active: 'bg-green-100 text-green-800',
    Draft: 'bg-gray-200 text-gray-700',
}

const progressStyle = {
    'Not Generated': 'bg-gray-200 text-gray-700',
    'In Progress': 'bg-blue-100 text-blue-800',
    Completed: 'bg-green-100 text-green-800',
}
// sorting and pagination
const pageLimit = 10;
const sortValue = {
    name: (r) => r.name.toLowerCase(),
    stock: (r) => r.stock,
    progress: (r) => r.progress
}
//Header component 
function SortHeader({ label, sortKey, sort, onSort }) {
    const active = sort.key === sortKey
    return (
        <button
            type="button"
            onClick={() => onSort(sortKey)}
            className="flex justify-center items-center gap-2 w-full cursor-pointer"
        >
            <span>{label}</span>
            <div className="inline-flex flex-col text-[10px]">
                <FontAwesomeIcon
                    icon={faAngleUp}
                    className={active && sort.type === 'asc' ? 'text-[#303030]' : 'text-[#8A8A8A]'}
                />
                <FontAwesomeIcon
                    icon={faAngleDown}
                    className={active && sort.type === 'desc' ? 'text-[#303030]' : 'text-[#8A8A8A]'}
                />
            </div>
        </button>
    )
}


//pagination component
function Pagination({ page, totalPages, onChange }) {
    const btn =
        'w-7 h-6 flex items-center justify-center rounded bg-olive-200 text-[#303030] text-xs  disabled:cursor-not-allowed cursor-pointer'
    return (
        <div className="flex items-center justify-center gap-3 border-t border-olive-200 py-3 text-xs text-[#303030]">
            <button
                type="button"
                className={btn}
                onClick={() => onChange(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
            >
               <img src={leftAngle} alt="Previous page" />
            </button>
            <span>
                {page} of {totalPages} pages
            </span>
            <button
                type="button"
                className={btn}
                onClick={() => onChange(page + 1)}
                disabled={page === totalPages}
                aria-label="Next page"
            >
                <img src={rightAngle} alt="Next page" />
            </button>
        </div>
    )
}

function ActionButton({ img, tip, disabled }) {
    return (
        <Whisper
            trigger="hover"
            placement="autoHorizontal"
            speaker={
                <Tooltip className="action-tooltip">
                    {disabled
                        ? 'Wait until current video is done.'
                        : tip}
                </Tooltip>
            }
        >
            <button
                className={`px-2 ${disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}`}
            >
                <img src={img} alt={tip} className="w-4 h-4" />
            </button>
        </Whisper>
    );
}


function TableData() {

    const [page,setPage] = useState(1);
    const [sort, setSort] = useState({ key: null, type: null })




const handleSort = (key) => {
        setSort((prev) => {
            if (prev.key !== key) return { key, type: 'asc' }
            if (prev.type === 'asc') return { key, type: 'desc' }
            return { key: null, type: null }
        })
        setPage(1) // sort badalte hi pehle page par wapas
    }

    // 1. sorting (poore data par)
    const sortedData = sort.key
        ? [...tableData].sort((a, b) => {
              const x = sortValue[sort.key](a)
              const y = sortValue[sort.key](b)
              const result = typeof x === 'string' ? x.localeCompare(y) : x - y
              return sort.type === 'asc' ? result : -result
          })
        : tableData

            const totalPage = Math.max(1, Math.ceil(sortedData.length / pageLimit));
             const totalData = sortedData.slice((page-1)*pageLimit,page*pageLimit);
    return (
        <div className="bg-white  border border-olive-200  overflow-hidden">
            <Table
                className="custom-table"
                autoHeight
                data={totalData}
                rowHeight={52}
                headerHeight={44}>
                <Column flexGrow={2} verticalAlign="middle">
                    <HeaderCell>
                        <SortHeader label="Product" sortKey="name" sort={sort} onSort={handleSort} />
                    </HeaderCell>
                    <Cell>
                        {(row) => (
                            <div className="flex items-center gap-3">
                                <img src={row.image} alt={row.name} className="w-8 h-8 rounded object-cover" />
                                <span className="text-[13px] font-semibold">{row.name}</span>
                            </div>
                        )}
                    </Cell>
                </Column>

                <Column flexGrow={1} verticalAlign="middle">
                    <HeaderCell>Images</HeaderCell>
                    <Cell>{(row) => `${row.images} Images`}</Cell>
                </Column>

                <Column flexGrow={1} verticalAlign="middle">
                    <HeaderCell>Status</HeaderCell>
                    <Cell>{(row) => <Badge text={row.status} styles={statusStyle} />}</Cell>
                </Column>

                <Column flexGrow={1.5} verticalAlign="middle">
                    <HeaderCell>
                        <SortHeader label="Stock" sortKey="stock" sort={sort} onSort={handleSort} />
                    </HeaderCell>
                    <Cell>
                        {(row) =>
                            row.stock === 0 ? (
                                <span>
                                    <span className="text-red-600">0 in stock</span> for {row.variants} variants
                                </span>
                            ) : (
                                `${row.stock} in stock`
                            )
                        }
                    </Cell>
                </Column>

                <Column flexGrow={1.2} verticalAlign="middle">
                    <HeaderCell>
                        <SortHeader label="progress" sortKey="progress" sort={sort} onSort={handleSort} />
                    </HeaderCell>
                    <Cell>{(row) => <Badge text={row.progress} />}</Cell>
                </Column>
                <Column width={100} align="center" verticalAlign="middle">
                    <HeaderCell>Action</HeaderCell>
                    <Cell>
                        {(row) => {
                            const notGenerated = row.progress === 'Not Generated'
                            const completed = row.progress === 'Completed'
                            return (
                                <div className="flex justify-center">
                                    {/* eye: sirf Completed mein enabled */}
                                    <ActionButton
                                        img={eyeIcon}
                                        tip={completed ? 'View Video' : 'Wait until current video is done.'}
                                        disabled={!completed}
                                    />

                                    {/* doosra button */}
                                    {notGenerated ? (
                                        <ActionButton img={generateVIcon} tip="Generate Video" disabled={false} />
                                    ) : (
                                        <ActionButton
                                            img={progressIcon}
                                            tip={completed ? 'Regenerate Video' : 'Wait until current video is done.'}
                                            disabled={!completed}
                                        />
                                    )}
                                </div>
                            )
                        }}
                    </Cell>
                </Column>
            </Table>
            <Pagination page={page} totalPages={totalPage}  onChange={setPage} />
        </div>
    )
}

export default TableData