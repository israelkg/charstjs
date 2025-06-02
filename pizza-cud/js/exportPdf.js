const btnExport = document.getElementById("exportPdfBtnMonth");
btnExport.addEventListener("click", function(){
    const content = document.getElementById('exportContent');

    html2canvas(content).then(function (canvas) {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'A4');

        const pdfWidth = pdf.internal.pageSize.width;
        const pdfHeight = pdf.internal.pageSize.height;

        const imgWidth = pdfWidth - 20;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let position = 10;

        if (imgHeight > pdfHeight - 20) {
            let heightLeft = imgHeight;
            let pageNumber = 1;

            while (heightLeft > 0) {
                const pageHeight = pdfHeight - 20;
                const sHeight = Math.min(heightLeft, pageHeight);

                const tmpCanvas = document.createElement('canvas');
                const tmpCtx = tmpCanvas.getContext('2d');
                tmpCanvas.width = canvas.width;
                tmpCanvas.height = (sHeight / imgHeight) * canvas.height;
                tmpCtx.drawImage(canvas, 0, (imgHeight - heightLeft) / imgHeight * canvas.height, canvas.width, tmpCanvas.height, 0, 0, tmpCanvas.width, tmpCanvas.height);

                const tmpImgData = tmpCanvas.toDataURL('image/png');

                if (pageNumber > 1) {
                    pdf.addPage();
                }
                pdf.addImage(tmpImgData, 'PNG', 10, position, imgWidth, sHeight);

                heightLeft -= pageHeight;
                pageNumber++;
            }
        } else {
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        }

        pdf.save('sales.pdf');
    });
})
