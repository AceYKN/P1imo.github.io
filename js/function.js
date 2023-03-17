const form = document.getElementById('form');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// 当用户提交表单时，执行绘制图像函数
form.addEventListener('submit', (event) => {
	event.preventDefault();
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawFunction();
});

// 绘制函数图像
function drawFunction() {
	const funcInput = document.getElementById('func');
	const funcStr = funcInput.value;

	// 定义x轴和y轴的长度和位置
	const xAxisLength = canvas.width - 100;
	const yAxisLength = canvas.height - 100;
	const xAxisPos = 50;
	const yAxisPos = yAxisLength + 50;

	// 设置x轴和y轴的样式
	ctx.beginPath();
	ctx.strokeStyle = '#000';
	ctx.lineWidth = 2;
	ctx.moveTo(xAxisPos, yAxisPos);
	ctx.lineTo(xAxisPos + xAxisLength, yAxisPos);
	ctx.stroke();
	ctx.moveTo(xAxisPos, yAxisPos);
	ctx.lineTo(xAxisPos, yAxisPos - yAxisLength);
	ctx.stroke();

	// 计算函数图像上每个点的坐标，并绘制出函数图像
	ctx.beginPath();
	ctx.strokeStyle = 'red';
	ctx.lineWidth = 2;
	let x = -xAxisLength / 2;
	let y = eval(funcStr.replace(/x/g, x));
	ctx.moveTo(xAxisPos + x, yAxisPos - y);

	for (let i = 1; i <= xAxisLength; i++) {
		x = -xAxisLength / 2 + i;
		y = eval(funcStr.replace(/x/g, x));
		ctx.lineTo(xAxisPos + x, yAxisPos - y);
	}

	ctx.stroke();
}
