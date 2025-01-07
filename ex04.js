const categories = [
	{
		id: 1,
		name: "Chuyên mục 1",
	},
	{
		id: 2,
		name: "Chuyên mục 2",
		children: [
			{
				id: 4,
				name: "Chuyên mục 2.1",
			},
			{
				id: 5,
				name: "Chuyên mục 2.2",
				children: [
					{
						id: 10,
						name: "Chuyên mục 2.2.1",
					},
					{
						id: 11,
						name: "Chuyên mục 2.2.2",
					},
					{
						id: 12,
						name: "Chuyên mục 2.2.3",
					},
				],
			},
			{
				id: 6,
				name: "Chuyên mục 2.3",
			},
		],
	},
	{
		id: 3,
		name: "Chuyên mục 3",
		children: [
			{
				id: 7,
				name: "Chuyên mục 3.1",
			},
			{
				id: 8,
				name: "Chuyên mục 3.2",
			},
			{
				id: 9,
				name: "Chuyên mục 3.3",
			},
		],
	},
];
let i = 1;
function convert (categories, i){
    let content = "";
    const sign = "|--".repeat(i);
    categories.forEach((category) => {
        content += `<option value="${category.id}">${sign}${category.name}</option> \n`;
        if (Array.isArray(category.children)) {
            return convert(category.children, i++);
        }
    })
    return content;
}
let content = `<select> \n`;
content += convert(categories, 1);
content += `</select>`;
document.write(content);