//sorter: (a, b) => a.name.length - b.name.length
const tableSort = (a, b) => {
    const regnum = new RegExp("^[0-9]*$");//纯数字类型
    const regunit = new RegExp("^[0-9]+(.[0-9]+)?[^0-9]+$"); //数字加单位类型
    if (regnum.test(a)) {
        //纯数字
        return (a - b)
    } else if (regunit.test(a)) {
        //数字加单位
        const numpartA = a.match(/(^[0-9]+(\.[0-9]+)?)([^0-9]{1,})/)[1];
        const numpartB = b.match(/(^[0-9]+(\.[0-9]+)?)([^0-9]{1,})/)[1];
        const unitpartA = a.match(/(^[0-9]+(\.[0-9]+)?)([^0-9]{1,})/)[3].trim();
        const unitpartB = b.match(/(^[0-9]+(\.[0-9]+)?)([^0-9]{1,})/)[3].trim();
        let getValue = (numpart, unitpart) => {
            let compareValue
            if (unitpart === 'GB') {
                compareValue = parseFloat(numpart) * 1024 * 1024 * 1024;
            } else if (unitpart === 'MB') {
                compareValue = parseFloat(numpart) * 1024 * 1024;
            } else if (unitpart === 'KB') {
                compareValue = parseFloat(numpart) * 1024;
            } else if (unitpart === 'B') {
                compareValue = parseFloat(numpart);
            } else if (unitpart === 's') {
                compareValue = parseFloat(numpart) * 1000 * 1000;
            } else if (unitpart === 'ms') {
                compareValue = parseFloat(numpart) * 1000;
            } else if (unitpart === 'us') {
                compareValue = parseFloat(numpart);
            } else if (unitpart === '万') {
                compareValue = parseFloat(numpart) * 10000;
            } else if (unitpart === '百万') {
                compareValue = parseFloat(numpart) * 1000000;
            } else if (unitpart === '千万') {
                compareValue = parseFloat(numpart) * 10000000;
            } else if (unitpart === '亿') {
                compareValue = parseFloat(numpart) * 100000000;
            } else if (unitpart === '个') {
                compareValue = parseFloat(numpart);
            } else if (unitpart === '次') {
                compareValue = parseFloat(numpart);
            }
            return compareValue
        }
        const aValue = getValue(numpartA, unitpartA)
        const bValue = getValue(numpartB, unitpartB)
        return aValue - bValue
    }
}
const sortStandardList = [
    'count', 'id', 'bytes', 'drops', 'fail_app', 'fail_request', 'port', 'request_num', 'rst', 'rttin', 'rttout', 'server_time', 'tol_app', 'tran_time',
    'packets', 'ret', 'conn',//网络流量
    'sport', 'dport',//过滤
    'ip_count', //对象定义
]

const sortColumns = (xData) => {
    let newColumns = []
    if (xData && xData.length > 0) {
        newColumns = xData.map(item => {
            if (sortStandardList.indexOf(item.dataIndex) !== -1) {
                item.sorter = (a, b) => tableSort(a[item.dataIndex], b[item.dataIndex])
            }
            return item
        })
    }
    return newColumns
}


export default sortColumns
