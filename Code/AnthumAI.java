/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package anthumai;


import java.io.File;
import java.io.FileNotFoundException;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.Random;
import java.util.Scanner;
import java.text.SimpleDateFormat; 

/**
 *
 * @author ApowerL
 */
public class AnthumAI 
{
    static ArrayList <Double> months = new ArrayList<>();
    static ArrayList <Double> means = new ArrayList<>();

		// these 2 arrays are for storing 3 training data sets

    static ArrayList <Double> monthTest = new ArrayList<>();
    static ArrayList <Double> meanTest = new ArrayList<>();

// these 2 arrays are for storing testing data set

    static int sizeTest;
    static double [] normalizedMonthTest;
    static double [] normalizedMeanTest;
// these 2 arrays are used to stored normalized data
    
    public static void main(String[] args) throws FileNotFoundException, ParseException 
    {
        
        double mean = 0.0; double month = 1.0;

        double max = 0.0; double min = 0.0;
        
        double maxTest = 0.0; double minTest = 0.0;

        String[] strArray= new String[4];

        Scanner readFile = new Scanner (new File("train_data_2.txt"));
        
        while (readFile.hasNextLine())
        {
            String str = readFile.nextLine();
            
            strArray = str.split(", ");
            
            String mdy = strArray[1];
            
            Date date = new SimpleDateFormat("MM/yyyy").parse(mdy);
            
            int mth = 1 + date.getMonth();
          
            month = 1.0* mth;
            
            String jobCode = strArray[0];
            
            mean = Double.parseDouble(strArray[2]);

            months.add(month);
            //System.out.println(hour);


            means.add(mean);
            //System.out.println(eUse);

        }
        readFile.close();

//
//        readFile = new Scanner (new File("test_data_4.txt"));
//        
//        while (readFile.hasNextLine())
//        {
//            String str = readFile.nextLine();
//            
//            strArray = str.split(", ");
//            
//            String mdy = strArray[1];
//	
//            Date date = new Date(mdy);
//	
//            month = (1 + date.getMonth());
//	
//            String jobCode = strArray[0];
//            
//            mean = Double.parseDouble(strArray[2]);
//
//            monthTest.add(month);
//            //System.out.println(hour);
//
//
//            meanTest.add(mean);
//            //System.out.println(eUse);
//
//        }
//        readFile.close();

       // System.out.println("from here on is normalized hours");

        max = Collections.max(months);
        min = Collections.min(months);

      //  maxTest = Collections.max(monthTest);
     //   minTest = Collections.min(monthTest);

        int size = months.size();
        //sizeTest = monthTest.size();

        double [] normalizedMonths = new double[size];
        double [] normalizedMonthTest = new double[sizeTest];

        for(int i = 0; i<size; i++)
        {
        	double normMonth = normalize(months.get(i), max, min);
        	normalizedMonths[i]= normMonth;
        }
      //  for(int i = 0; i<sizeTest; i++)
       // {
        	//double normMonthTest = normalize(monthTest.get(i), maxTest, minTest);
        	//normalizedMonthTest[i]= normMonthTest;
      //  }

       // System.out.println("from here on is normalized electric uses");

        max = Collections.max(means);
        min = Collections.min(means);

        //maxTest = Collections.max(meanTest);
       // minTest = Collections.min(meanTest);

        size = means.size();
       // sizeTest = meanTest.size();

        double [] normalizedMeans = new double[size];
       // double [] normalizedeMeanTest = new double[sizeTest];

        for(int i = 0; i<size; i++)
        {
        	double normMeans = normalize(means.get(i), max, min);
        	normalizedMeans[i]= normMeans;
        }
       // for(int i = 0; i<sizeTest; i++)
      //  {
        	//double normMeanTest = normalize(meanTest.get(i), maxTest, minTest);
        	//normalizedeMeanTest[i]= normMeanTest;
      //  }

        thirdDegree(normalizedMonths,normalizedMeans);
    }

    public static double normalize(double x, double max, double min)
    {
        return ((x - min)/ (max - min));

    }// this is the method for normalizing data

    

    public static void thirdDegree(double[]hou, double[]eus) throws FileNotFoundException
    {
    	double hour = 0, eUse =0; int size = hou.length;
	    double error=1, error1=1, error2=1, error3=1;
	    double learnCof = 0.3;
	    double weightChange=0;

	    double aWeight, bWeight, cWeight, dWeight, eWeight, fWeight, gWeight, biasWeight;
	    Random random = new Random();
	    aWeight = random.nextDouble();
	    bWeight = random.nextDouble();
	    cWeight = random.nextDouble();
            dWeight = random.nextDouble();
            eWeight = random.nextDouble();
            fWeight = random.nextDouble();
            gWeight = random.nextDouble();
	    biasWeight = random.nextDouble();


	    double out = 0.0;
	    int n = 0;
	    while (n<100)//error>0.00001 && n < 30)
	    {
        	error=0;
	        error1 = 0;
	        error2 = 0;
	        error3 = 0;
	        //Scanner train75 = new Scanner (new File("new data.txt"));
	        for(int i = 0; i < size; i++)
	        {

	        	hour = hou[i];
	        	eUse = eus[i];

	        	out = (hour*aWeight) + ((Math.pow(hour, 2))*bWeight) + ((Math.pow(hour, 3))*cWeight) +
                                ((Math.pow(hour, 4))*dWeight) + ((Math.pow(hour, 5))*eWeight) +
                                ((Math.pow(hour,64))*fWeight) + ((Math.pow(hour, 7))*gWeight)
                                + biasWeight;
	        	if (eUse != out)
	        	{
	        		error+=Math.pow((eUse-out),2);
	        		error1+=Math.pow((eUse-out),2);
	        	}


	        	weightChange=learnCof*(eUse-out);
	        	aWeight+=(hour*weightChange);
	        	bWeight+=((Math.pow(hour, 2))*weightChange);
	        	cWeight+=((Math.pow(hour, 3))*weightChange);
                        dWeight+=((Math.pow(hour, 4))*weightChange);
                        eWeight+=((Math.pow(hour, 5))*weightChange);
                        fWeight+=((Math.pow(hour, 6))*weightChange);
                        gWeight+=((Math.pow(hour, 7))*weightChange);
	        	biasWeight+=(weightChange);

	        }
	        for(int i =0; i < size; i++)
	        {

	        	hour = hou[i];
	        	eUse = eus[i];

	        	out = (hour*aWeight) + ((Math.pow(hour, 2))*bWeight) + ((Math.pow(hour, 3))*cWeight) +
                                ((Math.pow(hour, 4))*dWeight) + ((Math.pow(hour, 5))*eWeight) +
                                ((Math.pow(hour,64))*fWeight) + ((Math.pow(hour, 7))*gWeight)
                                + biasWeight;
	        	if (eUse != out)
	        	{
	        		error+=Math.pow((eUse-out),2);
	        		error2+=Math.pow((eUse-out),2);
	        	}


	        	weightChange=learnCof*(eUse-out);
	        	aWeight+=(hour*weightChange);
	        	bWeight+=((Math.pow(hour, 2))*weightChange);
	        	cWeight+=((Math.pow(hour, 3))*weightChange);
                        dWeight+=((Math.pow(hour, 4))*weightChange);
                        eWeight+=((Math.pow(hour, 5))*weightChange);
                        fWeight+=((Math.pow(hour, 6))*weightChange);
                        gWeight+=((Math.pow(hour, 7))*weightChange);
	        	biasWeight+=(weightChange);

	        }
	        for(int i = 0; i < size; i++)
	        {

	        	hour = hou[i];
	        	eUse = eus[i];

	        	out = (hour*aWeight) + ((Math.pow(hour, 2))*bWeight) + ((Math.pow(hour, 3))*cWeight) +
                                ((Math.pow(hour, 4))*dWeight) + ((Math.pow(hour, 5))*eWeight) +
                                ((Math.pow(hour,64))*fWeight) + ((Math.pow(hour, 7))*gWeight)
                                + biasWeight;
	        	if (eUse != out)
	        	{
	        		error+=Math.pow((eUse-out),2);
	        		error3+=Math.pow((eUse-out),2);
	        	}

                        weightChange=learnCof*(eUse-out);
	        	aWeight+=(hour*weightChange);
	        	bWeight+=((Math.pow(hour, 2))*weightChange);
	        	cWeight+=((Math.pow(hour, 3))*weightChange);
                        dWeight+=((Math.pow(hour, 4))*weightChange);
                        eWeight+=((Math.pow(hour, 5))*weightChange);
                        fWeight+=((Math.pow(hour, 6))*weightChange);
                        gWeight+=((Math.pow(hour, 7))*weightChange);
	        	biasWeight+=(weightChange);

	        }
	        error1 = error1/size;
	        error2 = error1/size;
	        error3 = error1/size;
	        error = error/months.size();
	        n++;
    }

	    System.out.println("\n----------Third Architecture----------");
	    System.out.println("Training Error Day 1: "+error1+" \nTraining Error Day 2: "+error2+" \nTraining Error Day 3: "+error3);
	    //testingThree(xWeight, yWeight, zWeight, biasWeight);
			System.out.println("Activation function for neuron: " +
                                gWeight + " * x^7" + fWeight + " * x^6"+
                                eWeight + " * x^5 " + dWeight + " * x^4 " + 
                                cWeight + " * x^3 "+ bWeight + " * x^2 "+ 
                                aWeight + " * x + " + biasWeight +"\n"  );
    }

     public static void testingThree(double xWeight, double yWeight, double zWeight, double biasWeight) throws FileNotFoundException
    {

    	Scanner read = new Scanner (new File("test_data_4.txt"));

    	String[] strArray= new String[2];
		read.useDelimiter("\t");
		double hour;
		double eUse;
		double out;
		double error=0;



	for(int i=0; i<normalizedMonthTest.length;i++)
	{
            hour = normalizedMonthTest[i];
            eUse = normalizedMeanTest[i];

            out=(hour*xWeight) + ((Math.pow(hour, 2))*yWeight) + ((Math.pow(hour, 3))*zWeight) + biasWeight;
            //System.out.println("Hour: "+hour+" eUse Predicted: "+out+" Actual eUse: "+eUse);

            if (eUse != out)
        	{
        		error+=Math.pow((eUse-out),2);
        	}


        }

        error=error/normalizedMonthTest.length;
		System.out.println("----------THIRD ARCHITECTURE TESTING----------");
		System.out.println("Error: "+error);
		read.close();
    }
    
}
