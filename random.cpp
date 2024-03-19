#include <iostream>
#include <cstdlib>
#include <ctime>


using namespace std;
int main (){
	srand(time(0));
    int randomNumber = rand()%100;
    int UserNumber;
    cout<<"Guess a number between 0-99: "<<endl;
	cin>>UserNumber;
	if(UserNumber==randomNumber){
		cout<<"That is correct!"<<endl;
	}
	else{
		cout<<"Incorrect,try again."<<endl;
	}
}