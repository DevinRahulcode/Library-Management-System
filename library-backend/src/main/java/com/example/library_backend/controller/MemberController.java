package com.example.library_backend.controller;

import com.example.library_backend.exception.RecordNotFoundException;
import com.example.library_backend.model.Member;
import com.example.library_backend.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class MemberController {

    @Autowired
    private MemberRepository memberRepository;

    @PostMapping("/add")
    public Member addmember(@RequestBody Member member){
        return memberRepository.save(member);
    }

    @GetMapping("/getall")
    public List<Member> getallMembers(){
        return memberRepository.findAll();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Member> getmeberById(@PathVariable int id){
        Member member = memberRepository.findById(id).orElseThrow(() ->new RecordNotFoundException("Record Not Found"));
        return ResponseEntity.ok(member);
    }

    @PutMapping("/edit/{id}")
    public ResponseEntity<Member> editMember(@PathVariable int id, @RequestBody Member editMemberDetails){
        Member editMember = memberRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("Record Not Found"));

        editMember.setName(editMemberDetails.getName());
        editMember.setNic(editMemberDetails.getNic());
        editMember.setEmail(editMemberDetails.getEmail());
        editMember.setGender(editMemberDetails.getGender());
        editMember.setType(editMemberDetails.getType());

        memberRepository.save(editMember);

        return ResponseEntity.ok(editMember);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<HttpStatus> delete(@PathVariable int id){
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> new RecordNotFoundException("Not Found"));

        memberRepository.delete(member);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



}
