import Mock from 'mockjs';
Mock.setup({timeout:'1200-2600'});
 Mock.mock(
    '/data',{
     
         "data|1-20":[{
             "href": 'http://ant.design',
             "title|1-6": `antd`,
             "avatar":"https://zos.alipayobjects.com",
             "description": 'Ant Design, a design language for',
             "content": 'We supply a series of design '
         }]
    
})