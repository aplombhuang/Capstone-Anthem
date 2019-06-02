import model.Employee;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class ExcelMaster {
    public static final String SAMPLE_XLSX_FILE_PATH = "./new-data.xlsx";
    private static ArrayList<Double> durationList=new ArrayList<>();


    public static void main(String[] args) {
        readExcel();
    }

    private static void readExcel() {
        try {
            Workbook workbook = WorkbookFactory.create(new File(SAMPLE_XLSX_FILE_PATH));
            workbook.forEach(sheet -> System.out.println(sheet.getSheetName()));

            Sheet sheet = workbook.getSheetAt(0);
            DataFormatter dataFormatter = new DataFormatter();
            sheet.forEach(row -> {
                row.forEach(cell -> {
                    if (cell.getColumnIndex()==6 ){
                        durationList.add(printCellValue(cell));
                    }

                });

            });

            double sum=0;
            double suareSum=0;


            for (double values: durationList){
                sum+=values;
                suareSum+=Math.pow(values,2);
            }

            System.out.println(sum);
            double average=sum/durationList.size();
            System.out.println(average);
            double mediam=Math.sqrt(suareSum)/durationList.size();
            System.out.println(mediam);

            excelWriter(average,mediam);


        } catch (IOException e) {
            e.printStackTrace();
        } catch (InvalidFormatException e) {
            e.printStackTrace();
        }
    }

    private static double printCellValue(Cell cell) {

        switch (cell.getCellTypeEnum()) {

            case NUMERIC:
                if (!DateUtil.isCellDateFormatted(cell)) {
                    return cell.getNumericCellValue();
                }
        }
        return -1;

    }

    private static void excelWriter(double average, double standardDeviation){
        String[] columns = {"Average", "Standard Deviation"};
        Workbook workbook = new XSSFWorkbook();
        CreationHelper createHelper = workbook.getCreationHelper();
        Sheet sheet = workbook.createSheet("average_medium_calculation");

        Font headerFont = workbook.createFont();
        headerFont.setBold(true);
        headerFont.setFontHeightInPoints((short) 14);
        headerFont.setColor(IndexedColors.RED.getIndex());

        CellStyle headerCellStyle = workbook.createCellStyle();
        headerCellStyle.setFont(headerFont);

        Row headerRow = sheet.createRow(0);
        // Create cells
        for(int i = 0; i < columns.length; i++) {
            Cell cell = headerRow.createCell(i);
            cell.setCellValue(columns[i]);
            cell.setCellStyle(headerCellStyle);
        }

        int rowNum = 1;
        Row row = sheet.createRow(rowNum);
        row.createCell(0)
                .setCellValue(average);
        row.createCell(1)
                .setCellValue(standardDeviation);

        FileOutputStream fileOut = null;
        try {
            fileOut = new FileOutputStream(System.currentTimeMillis()+".xlsx");
            workbook.write(fileOut);
            fileOut.close();

            // Closing the workbook
            workbook.close();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

}
