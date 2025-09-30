//package jeongcheogi; 
import java.util.ArrayList; 
import java.util.Random; 
public class Ranlunchmenu {
     public static void main(String[] args) { 
    // 점심 메뉴 배열 생성 ArrayList<String> 
     menuList = new ArrayList<>(); menuList.add("조봉순국밥"); 
     menuList.add("편의점삼김 + 휴게실컵라면"); 
     menuList.add("손수김밥"); 
     menuList.add("오짜장"); 
     menuList.add("청년감자탕"); 
     menuList.add("맘스터치"); 
     menuList.add("다시 한번 돌릴 기회를 주마"); 
    //  랜덤 객체 생성하려면 Ran import 
     Random random = new Random(); 
    // 랜덤으로 메뉴 선택 ranindex -> array-> index 선택 
     int randomIndex = random.nextInt(menuList.size()); String selectedMenu = menuList.get(randomIndex); // 
    // 결과 출력 
    System.out.println("오늘의 점심 메뉴 추천: " + selectedMenu);
}
}

